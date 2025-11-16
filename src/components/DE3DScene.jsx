import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Lightweight 3D scene illustrating an ETL pipeline with nodes and edges
function DE3DScene() {
  const mountRef = useRef(null)
  const requestRef = useRef(null)

  useEffect(() => {
    const width = mountRef.current.clientWidth
    const height = 260

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.set(0, 2.2, 6)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // Lights
    const hemi = new THREE.HemisphereLight(0x88ccff, 0x334455, 1.0)
    scene.add(hemi)
    const dir = new THREE.DirectionalLight(0xffffff, 0.8)
    dir.position.set(5, 10, 7)
    scene.add(dir)

    // Nodes: Source -> Transform -> Warehouse
    const nodeGeo = new THREE.BoxGeometry(0.9, 0.6, 0.9)
    const matSource = new THREE.MeshStandardMaterial({ color: 0x38bdf8 })
    const matTransform = new THREE.MeshStandardMaterial({ color: 0xa78bfa })
    const matWarehouse = new THREE.MeshStandardMaterial({ color: 0x22d3ee })

    const source = new THREE.Mesh(nodeGeo, matSource)
    source.position.set(-2, 0, 0)
    const transform = new THREE.Mesh(nodeGeo, matTransform)
    transform.position.set(0, 0, 0)
    const warehouse = new THREE.Mesh(nodeGeo, matWarehouse)
    warehouse.position.set(2, 0, 0)

    scene.add(source, transform, warehouse)

    // Edges as cylinders
    const edgeGeo = new THREE.CylinderGeometry(0.05, 0.05, 2, 16)
    const edgeMat = new THREE.MeshStandardMaterial({ color: 0x67e8f9, emissive: 0x0891b2, emissiveIntensity: 0.4 })

    const edge1 = new THREE.Mesh(edgeGeo, edgeMat)
    edge1.rotation.z = Math.PI / 2
    edge1.position.set(-1, 0, 0)
    const edge2 = new THREE.Mesh(edgeGeo, edgeMat)
    edge2.rotation.z = Math.PI / 2
    edge2.position.set(1, 0, 0)
    scene.add(edge1, edge2)

    // Particles flowing along edges
    const dotGeo = new THREE.SphereGeometry(0.06, 16, 16)
    const dotMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x38bdf8 })
    const dots = Array.from({ length: 20 }, () => new THREE.Mesh(dotGeo, dotMat))
    dots.forEach((d, i) => { d.position.set(-2 + (i % 10) * 0.2, 0, Math.sin(i) * 0.2); scene.add(d) })

    let t = 0
    const animate = () => {
      t += 0.01
      source.rotation.y += 0.01
      transform.rotation.y -= 0.012
      warehouse.rotation.y += 0.008

      dots.forEach((d, i) => {
        const offset = (i % 10) * 0.2
        let x = -2 + ((t + offset) % 2) // flow across edge1
        if (x > 0) {
          x = 0 + ((t + offset - 2) % 2) // flow across edge2
        }
        d.position.x = -2 + (t * 2 + offset) % 4 - 2
      })

      camera.position.y = 2.2 + Math.sin(t * 0.8) * 0.1
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
      requestRef.current = requestAnimationFrame(animate)
    }

    animate()

    const onResize = () => {
      const w = mountRef.current.clientWidth
      renderer.setSize(w, height)
      camera.aspect = w / height
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(requestRef.current)
      window.removeEventListener('resize', onResize)
      mountRef.current.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div aria-label="3D ETL pipeline" className="w-full" ref={mountRef} />
  )
}

export default DE3DScene

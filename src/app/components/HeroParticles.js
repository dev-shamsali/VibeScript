function HeroParticles() {
    const canvasRef = useRef(null)
    const mouse = useRef({ x: -9999, y: -9999 })
    const ctaRects = useRef([])

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        let w, h
        const resize = () => {
            w = canvas.width = window.innerWidth
            h = canvas.height = window.innerHeight

            // Cache CTA button positions
            ctaRects.current = Array.from(
                document.querySelectorAll('.hero-cta button')
            ).map((el) => el.getBoundingClientRect())
        }

        resize()
        window.addEventListener('resize', resize)

        const particleCount = 140
        const cursorRadius = 110
        const ctaRadius = 180

        const particles = Array.from({ length: particleCount }).map(() => {
            const x = Math.random() * w
            const y = Math.random() * h
            return {
                x,
                y,
                ox: x,
                oy: y,
                vx: 0,
                vy: 0,
                r: Math.random() * 1.6 + 0.6,
                a: Math.random() * 0.35 + 0.15,
            }
        })

        const onMove = (e) => {
            mouse.current.x = e.clientX
            mouse.current.y = e.clientY
        }

        const onLeave = () => {
            mouse.current.x = -9999
            mouse.current.y = -9999
        }

        window.addEventListener('mousemove', onMove)
        window.addEventListener('mouseleave', onLeave)

        const animate = () => {
            ctx.clearRect(0, 0, w, h)

            for (const p of particles) {
                let fx = 0
                let fy = 0

                // Cursor repel
                const dx = p.x - mouse.current.x
                const dy = p.y - mouse.current.y
                const dist = Math.hypot(dx, dy)

                if (dist < cursorRadius) {
                    const f = (cursorRadius - dist) / cursorRadius
                    const a = Math.atan2(dy, dx)
                    fx += Math.cos(a) * f * 0.12
                    fy += Math.sin(a) * f * 0.12
                }

                // CTA repel (stronger)
                for (const rect of ctaRects.current) {
                    const cx = rect.left + rect.width / 2
                    const cy = rect.top + rect.height / 2
                    const dx2 = p.x - cx
                    const dy2 = p.y - cy
                    const d2 = Math.hypot(dx2, dy2)

                    if (d2 < ctaRadius) {
                        const f2 = (ctaRadius - d2) / ctaRadius
                        const a2 = Math.atan2(dy2, dx2)
                        fx += Math.cos(a2) * f2 * 0.22
                        fy += Math.sin(a2) * f2 * 0.22
                    }
                }

                // Spring back
                p.vx += (p.ox - p.x) * 0.002
                p.vy += (p.oy - p.y) * 0.002

                p.vx += fx
                p.vy += fy

                p.vx *= 0.92
                p.vy *= 0.92

                p.x += p.vx
                p.y += p.vy

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(16,185,129,${p.a})`
                ctx.fill()
            }

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mouseleave', onLeave)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 z-0"
        />
    )
}

import { Link, useParams } from '@tanstack/react-router'
import {CircleChevronDown, CircleChevronLeft, SidebarClose, SidebarOpen} from 'lucide-react'
import styles from '@/styles/navbar.module.css'
import ThemeSwitcher from './ThemeSwitcher'
import { newData } from '@/util/data'
import { useEffect, useRef, useState } from 'react'

type Rule = {
    id: number
    title: string
    definition: string
    example: string[] 
    audio: string
}
type Category = {
    category_id: number
    category_title: string 
    rules: Rule[]
}
function Navbar() {
    const [isMenuOpen , setIsMenuOpen] = useState<boolean>(false)
    const menuRef = useRef<HTMLElement>(null)
    const params = useParams({strict: false})
    const activeCategoryId = params.categoryId ? Number(params.categoryId) : null 
    
    const handleMenuToggle = () => setIsMenuOpen(prev => !prev) 
    const isClose = isMenuOpen ? <SidebarClose onClick={handleMenuToggle}/> : <SidebarOpen onClick={handleMenuToggle}/>

    useEffect(() => {
        if(!isMenuOpen) return
        function handleScreenTouch(e: MouseEvent | TouchEvent) {
            if(menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsMenuOpen(false)
            }
        }
        document.addEventListener("mousedown",handleScreenTouch)
        document.addEventListener("touchstart",handleScreenTouch)

        return () => {
            document.removeEventListener("mousedown",handleScreenTouch)
            document.removeEventListener("touchstart",handleScreenTouch)
        }
    },[isMenuOpen])
     return (
    <>
        <button className={styles.onMobile} style={{right: isMenuOpen ? "250px" : "0"}}>
            {isClose}
        </button>
        <nav ref={menuRef} className={isMenuOpen ? styles.sidebar + " " + styles.mobileOn : styles.sidebar}>
            <div className={styles.title}>
                <h1>التجويد</h1>
                <ThemeSwitcher />
            </div>
            <ul className={styles.sidebarList}>
                {(newData as Category[]).map(category =>{

                    const isOpen = activeCategoryId === category.category_id
                    const icon = isOpen ? <CircleChevronDown/> : <CircleChevronLeft/>
                    return (
                        <li key={category.category_id}>
                            <div className={styles.categoryHeader}>
                                <Link 
                                    to="/categories/$categoryId/$ruleId"
                                    params={{categoryId: String(category.category_id) , ruleId: String(category.rules[0]?.id || 0)}}>
                                    {category.category_title}
                                </Link>
                                {icon}
                            </div>
                            {isOpen && (
                                <ul className={styles.subLinks}>
                                    {category.rules.map(rule => (
                                        <li key={rule.id}>
                                            <Link
                                                to="/categories/$categoryId/$ruleId"
                                                params={{ 
                                                    categoryId: String(category.category_id),
                                                    ruleId: String(rule.id) }}
                                            >{rule.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    )
                }
                )}
            </ul>
        </nav>
    </>
 )  
}

export default Navbar
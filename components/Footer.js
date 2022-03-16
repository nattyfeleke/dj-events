import Link from 'next/link'
import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <footer>
       <p>Copyright &copy; DJ Events 2022</p> 
       <Link href='/about'>About this Project</Link>
    </footer>
  )
}

export default Footer
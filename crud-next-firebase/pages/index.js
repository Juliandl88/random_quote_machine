import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <h1>HOME</h1>
      <Link href="/about">
      <p>about</p>
      </Link>
      
    </Layout>
  )
}
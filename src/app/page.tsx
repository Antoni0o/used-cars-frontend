"use client";
import CarCard from '@/components/CarCard'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <nav className="navbar">
        <div className="flex text-2xl cursor-pointer" onClick={() => router.push("/")}>
          <h1 className="font-bold">Used</h1>
          <h1>Cars</h1>
        </div>
        <div className="nav-button" onClick={() => router.push("/admin")}>
          <span className="font-bold">Admin</span>
        </div>
      </nav>

      <main className='main-grid'>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </main>
    </>
  )
}

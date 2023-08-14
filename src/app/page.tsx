"use client";
import CarCard from '@/components/CarCard'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { api } from './api';
import { Car } from '@/types/Car';

export default function Home() {
  const router = useRouter();
  const [carData, setCarData] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/cars/all')
      .then((res) => {
        setCarData(res.data);
        setLoading(false);
      });
  }, [])

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
        {loading
          ? 'Loading...'
          : carData
            ? carData.map((car) =>
              <CarCard
                key={car.id}
                id={car.id}
                model={car.model}
                brand={car.brand}
                photoUrl={car.photoUrl}
                price={car.price}
              />)
            : 'No cars available'
        }
      </main>
    </>
  )
}

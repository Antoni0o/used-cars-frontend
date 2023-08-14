"use client";

import TableRow from "@/components/TableRow";
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react";

import styles from './styles.module.css';
import { Car } from "@/types/Car";
import { api } from "@/app/api";

export default function AdminDashboard() {
  const [tableInfo, setTableInfo] = useState(false);
  const [carData, setCarData] = useState<Car[]>([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/admin');
    },
  })

  useEffect(() => {
    if (tableInfo) {
      api
        .get('/cars/all')
        .then((res) => {
          setCarData(res.data);
          setLoading(false);
        });
    } else {
      api
        .get('/cars/all')
        .then((res) => {
          setCarData(res.data);
          setLoading(false);
        });
    }
  }, [tableInfo])

  if (status == "loading") {
    return <span>Loading...</span>
  }

  return (
    <main className="p-4">
      <section className={styles.dashboard}>
        <div className={styles.tabs}>
          <span className={tableInfo ? "" : styles.notSelected} onClick={() => setTableInfo(true)}>Carros</span>
          <span className={tableInfo ? styles.notSelected : ""} onClick={() => setTableInfo(false)}>Usuários</span>
        </div>
        <table className={styles.table}>
          <tbody>
            {loading
              ? 'Loading...'
              : tableInfo
                ? carData.map((car, i) => <TableRow key={i} id={car.id} name={car.model} tableInfo={tableInfo}></TableRow>)
                : carData.map((car, i) => <TableRow key={i} id={car.id} name={car.model} tableInfo={tableInfo}></TableRow>)
            }
          </tbody>
        </table>
        <div className={styles.buttonCreate}>
          <span>Criar {tableInfo ? "Carro" : "Usuário"}</span>
        </div>
      </section>
    </main >
  )
}
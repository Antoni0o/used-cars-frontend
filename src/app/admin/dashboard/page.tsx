"use client";

import TableRow from "@/components/TableRow";
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useState } from "react";

import styles from './styles.module.css';
import EditModal from "@/components/EditModalComponent/EditModal";

export default function AdminDashboard() {
  /* const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/admin');
    },
  })

  if (status == "loading") {
    return <span>Loading...</span>
  } */

  const [tableInfo, setTableInfo] = useState(false);

  return (
    <main className="p-4">
      <section className={styles.dashboard}>
        <div className={styles.tabs}>
          <span className={tableInfo ? "" : styles.notSelected} onClick={() => setTableInfo(true)}>Carros</span>
          <span className={tableInfo ? styles.notSelected : ""} onClick={() => setTableInfo(false)}>Usuários</span>
        </div>
        <table className={styles.table}>
          <tbody>
            {tableInfo
              ?
              <TableRow name="Carro" tableInfo={tableInfo}></TableRow>
              :
              <TableRow name="Usuário" tableInfo={tableInfo}></TableRow>
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
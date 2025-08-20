import { useEffect, useState } from "react";
import Button from "../../ui/Botton";
import styles from "./Home.module.css";

// Array makanan
const makanan = [
    { nama: "Nasi Goreng", harga: 20000 },
    { nama: "Mie Ayam", harga: 15000 },
    { nama: "Sate Ayam", harga: 25000 },
    { nama: "Bakso", harga: 18000 }
  ];

const Home = () => {

    const [darkmode, setDarkmode] = useState<boolean>(false);
    console.log("darkmode saat ini",darkmode);

    useEffect(() => {
      console.log("Use Efect nih bos");

    },[darkmode])

    return (

        <main className={darkmode ? styles.dark : styles.light}>
            <h2>Daftar Makanan</h2>
      <ul>
        {makanan.map((item, index) => (
          <li key={index}>
            {item.nama} - Rp
            {item.harga.toLocaleString("id-ID")}
          </li>
        ))}
      </ul>  
      <br/> 
      <button onClick={() => setDarkmode(!darkmode)} > {darkmode ? 'lightmode':'darkmode'}</button>         
        </main>
    );
    
}

export default Home;
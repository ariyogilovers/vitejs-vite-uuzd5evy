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


  interface Menu {
    id: string;
    image_url: string;
    name: string;
  }  

const Home = () => {

    const [darkmode, setDarkmode] = useState<boolean>(false);
    const [menus, setMenus] = useState([]);
    console.log("darkmode saat ini",darkmode);

    useEffect(() => {
      console.log("Use Efect nih bos");

    },[darkmode])

    useEffect(() => {
      fetch('https://wpu-cafe.vercel.app/api/menu')
        .then((response) => response.json())
        .then((result) => setMenus(result.data));
    }, []);

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
      <br />
      <div className={styles.menu}>
        {menus.map((item: Menu) => (
          <div className={styles.item} key={item.id}>
            <img
              className={styles.image}
              src={item.image_url}
              alt={item.name}
            />
            {item.name}
          </div>
        ))}
      </div>
      <button onClick={() => setDarkmode(!darkmode)} > {darkmode ? 'lightmode':'darkmode'}</button>         
        </main>
    );
    
}

export default Home;
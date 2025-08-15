import Button from "../../ui/Botton";

// Array makanan
const makanan = [
    { nama: "Nasi Goreng", harga: 20000 },
    { nama: "Mie Ayam", harga: 15000 },
    { nama: "Sate Ayam", harga: 25000 },
    { nama: "Bakso", harga: 18000 }
  ];

const Home = () => {

    return (

        <main>
            <h2>Daftar Makanan</h2>
      <ul>
        {makanan.map((item, index) => (
          <li key={index}>
            {item.nama} - Rp
            {item.harga.toLocaleString("id-ID")}
          </li>
        ))}
      </ul>            
        </main>
    );
    
}

export default Home;
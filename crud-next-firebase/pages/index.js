import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/Layout";

//importamos firebase
import firebaseApp from "../firebase";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";

//Inicializamos constante de la base de datos
const db = getFirestore(firebaseApp);

export default function Home({ productos }) {
  return (
    <Layout>
      <Head>
        <title>Crud Next Firebase</title>
        <meta name="description" content="Crud Next Firebase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Link href="/formulario">
          <button className="btn btn-primary mb-4">Agregar producto</button>
        </Link>

        <div className="row">
          {productos.map((product) => (
            <div className="card card-body col-md-4" key={product.id}>
              <h5 className="card-header">{product.nombre}</h5>
              <p>{product.precio}$</p>
              <p>{product.cantidad} und.</p>
              <button
                className="btn btn-danger"
                onClick={() => router.push(`/producto/${product.id}`)}
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const querySnapshot = await getDocs(collection(db, "producto"));
  const docs = [];
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
  });

  return {
    props: {
      productos: docs,
    },
  };
};

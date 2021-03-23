import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header, Loading } from "../Components";
import { apiPedido } from "../api/data";
import { IPedido } from "../interfaces/pedido.interface";
import { Table } from "../styles";
import { toast } from "react-toastify";

export default function Id() {
  const [isLoading, setIsLoading] = useState(true);
  const [pedido, setpedidos] = useState<IPedido[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiPedido.show(router.query.id as string);
        if (response.data.length === 0) {
          toast.error("Pedido não encontrado!");
        }
        setpedidos(response.data);
      } catch (error) {
        toast.error("Ocorreu um erro na chamada do servidor!");
      } finally {
        setIsLoading(false);
      }
    };
    if (router.query.id) {
      fetchData();
    }
  }, [router.query.id]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className="container">
            <Table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                {pedido &&
                  pedido.map((item) => (
                    <tr key={item.id}>
                      <td>{item.login_nome}</td>
                      <td>{item.comentario}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </>
      )}
    </>
  );
}
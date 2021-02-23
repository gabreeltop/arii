import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header, Loading } from "../components";
import { apiAluno } from "../api/data";
import { IAluno } from "../interfaces/Aluno.interface";
import { Table } from "../styles";
import { toast } from "react-toastify";

export default function Id() {
  const [isLoading, setIsLoading] = useState(true);
  const [alunos, setAlunos] = useState<IAluno[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiAluno.show(router.query.id as string);
        if (response.data.length === 0) {
          toast.error("Não existe aluno neste curso!");
        }
        setAlunos(response.data);
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
                {alunos &&
                  alunos.map((item) => (
                    <tr key={item.id}>
                      <td>{item.nome}</td>
                      <td>{item.descricao}</td>
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
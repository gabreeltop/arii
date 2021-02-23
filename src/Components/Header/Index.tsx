import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaHome } from "react-icons/fa";
import { apiCurso } from "../../api/data";
import { ICurso } from "../../interfaces/Curso.interface";
import { Link } from "../../styles";
import { Container } from "./styles";

const Header = () => {
  const router = useRouter();
  const [cursos, setCursos] = useState<ICurso[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiCurso.index();
      setCursos(response.data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <div className="container">
        <FaHome onClick={() => router.push("/")} />
        {cursos &&
          cursos.map((item) => (
            <Link key={item.id} href={`/${item.id}`}>
              {item.nome}
            </Link>
          ))}
      </div>
    </Container>
  );
};

export default Header;
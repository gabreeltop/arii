import api from "../../index";
import { IAluno } from "../../../interfaces/Aluno.interface"

class AlunoData {
  show(cursoId: string) {
    return api.get<IAluno[]>(`alunos/${cursoId}`);
  }
}

export default new AlunoData();
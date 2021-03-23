import api from "../../index";
import { IPedido } from "../../../interfaces/pedido.interface"

class PedidoData {
  show(login_nome: string) {
    return api.get<IPedido[]>('pedido/${login_nome}');
  }
}

export default new PedidoData();
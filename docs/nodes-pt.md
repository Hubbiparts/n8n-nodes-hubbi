# Documentação dos Nodes Hubbi para n8n

Este documento descreve os nodes disponíveis e suas funcionalidades para a integração Hubbi no n8n.

## Tipos de Usuário

- **Fornecedor**: Acesso à gestão de estoque e operações avançadas de autopeças.
- **Comprador**: Acesso à busca de autopeças e veículos.

---

## Recursos e Operações

### 1. Estoque (apenas Fornecedor)

- **Criar Autopeça no Estoque**: Adiciona uma nova autopeça ao seu estoque.
- **Excluir Estoque**: Remove uma autopeça do estoque pelo ID.
- **Buscar Autopeça no Estoque**: Detalhes de uma autopeça específica pelo ID.
- **Listar Estoque**: Lista todas as autopeças disponíveis no estoque.
- **Atualizar Estoque**: Atualiza os dados de uma autopeça existente pelo ID.

### 2. Autopeça

#### Comprador

- **Buscar Autopeça**: Busca autopeças usando filtros como nome, número, código de barras, veículo, estado, estoque, imagem e posição.
- **Especificações da Peça**: Consulta especificações técnicas de uma peça.

#### Fornecedor

- **Buscar Autopeça**: Igual ao comprador.
- **Especificações da Peça**: Igual ao comprador.
- **Cotação da Peça**: Consulta detalhes de cotação para uma peça.

### 3. Veículo

- **Buscar Veículo pela Placa**: Consulta a descrição do veículo pela placa (disponível para Fornecedor e Comprador).

---

Para mais detalhes sobre cada operação e campos obrigatórios, consulte as propriedades do node no n8n ou a documentação da API Hubbi.

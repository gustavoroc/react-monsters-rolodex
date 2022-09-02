# React Component

## Constructor:

Normalmente, em React, os construtores são usados somente para dois propósitos:

- Inicializar local state através da atribuição de um objeto a this.state.
- Ligação (binding) de um método manipulador de eventos à uma instância.

## Render:

O método render() é o único método obrigatório em um class-component.
Quando chamado, ele examina this.props e this.state
e retorna um dos seguintes tipos:

- A função render() deve ser pura, o que significa que ela não modifica o state.

## How the state works by changing the UI:

- Basically, the UI will update if the memory alocation
  of the state object changes. In this line, you'll notice
  that if the value of a property changes not necessarily
  the UI will update, and this is why we need a method like
  setState..

---

[Visual Reference](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

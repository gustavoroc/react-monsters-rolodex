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

## Requisições para o servidor:

- componentDidMount(): É invocado imediatamente após um componente ser montado (inserido na árvore). Inicializações que exijam nós do DOM devem vir aqui. Se precisar carregar data de um endpoint remoto, este é um bom lugar para instanciar sua requisição

In practice, componentDidMount is the best place to put calls to fetch data, for two reasons:

Using didMount makes it clear that data won’t be loaded until after the initial render. **This reminds you to set up initial state properly**, so you don’t end up with undefined state that causes errors.

If you ever need to render your app on the server (a.k.a. server-side-rendering/SSR with Next.js or similar), componentWillMount will actually be called twice – once on the server, and again on the client – which is probably not what you want. Putting your API call code in componentDidMount will ensure that data is only fetched from the client, where it should be.

## Renderization and re-renderization:

- Components re-render based on two conditions:
  - **setState** are called
  - **Props** updated;

## Functional components:

- Utilizes hooks in order to replicate the class behavior.
- There are no lifecycles when it comes to functional components.
- The idea is just functions and side-effects
  - **Pure fn**: Are functions that only rely on its scope.
  - **Unpure fn**: Are functions that have something to do outside of its scope.
  - **Side Effects**: Are behavior that happen inside of a fn and change somethings in the outside scope.
- Functional components are unpure functions;

---

[Visual Reference](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

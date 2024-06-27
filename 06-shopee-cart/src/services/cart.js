//quais açoes meu carrinho pode fazer

// casos de uso
// 1 - adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}
// 2 - deletar item do carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item)=> item.name === name );
    if(index !== -1){
        userCart.splice(index, 1);
    }
}
// 3 - remover item
async function removeItem(userCart, item){
    // transforma o indice visual do usuário, para o indice do backend
    // const deleteIndex = index - 1;
    // é maior do que zero e se é menor do que o tamanho do carrinho
    //if(index >= 0 && index <= userCart.length){
      //  userCart.splice(deleteIndex, 1);
    //}
    //1. encontrar o indice do item
    const indexFound = userCart.findIndex((p)=>p.name === item.name)

    //2. Caso não encontre o item
    if(indexFound == -1){
        console.log("item não encontrato");
        return;
    }


    //3. item > 1 subtrair um item, item = 1 deletar o item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return;
    }

    if (userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    }

}

async function displayCart(userCart){
console.log("Shopee cart list: ")
userCart.forEach((item, index)=> {
    console.log(`${index + 1}.${item.name} - R$ ${item.price} | ${item.quantity}X | Subtotal = ${item.subtotal()}`);
})
}
// 4 - calcular o total
async function CalculateTotal(userCart){
    console.log("\nShopee Cart TOTAL IS:")
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log(`\n🎁Total: ${result}`);
}


export {
    addItem,
    CalculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}
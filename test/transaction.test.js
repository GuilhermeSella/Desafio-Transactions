//DESCRIBE => bloco de testes
//IT or TEST => declara unico teste
//EXPECT => asserções do resultado do teste - validar res

const app = require("../index")
const request = require("supertest");

describe("Transactions", ()=>{


    //Teste 1
    test("should be able to create a new transaction", async ()=>{
        const response = await request(app).post("/transactions").send({
            title:"Guilherme",
            type:"income",
            value:"10000"
        })

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            title:"Guilherme",
            type:"income",
            value:"10000"
        })
    })


    //Teste 2

    // it("should be able to list the transactions", ()=>{

    // })

    //Teste 3

    // it("should not be able to create outcome transaction without a valid balance", ()=>{

    // })


})

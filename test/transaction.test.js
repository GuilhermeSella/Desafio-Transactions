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
            value:"5000"
        })

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            title:"Guilherme",
            type:"income",
            value:"5000"
        })
    })


    //Teste 2

    test("should be able to list the transactions", async ()=>{


        await request(app).post('/transactions').send({
            title: 'Salary',
            type: 'income',
            value: 1000,
          });
      
          await request(app).post('/transactions').send({
            title: 'Bicycle',
            type: 'outcome',
            value: 1000,
          });

        const response = await request(app).get("/transactions");

        expect(response.statusCode).toBe(200);
        expect(response.body.transactions).toEqual(
            [
                {
                    title:"Guilherme",
                    type:"income",
                    value:"5000"
                },
                {
                    title: 'Salary',
                    type: 'income',
                    value: 1000,
                },
                {
                    title: 'Bicycle',
                    type: 'outcome',
                    value: 1000,
                },
            ],
        )

        expect(response.body.balance).toEqual(
           { 
                income: 6000,
                outcome:1000,
                total:5000
            }
        )    

         
        ;
    })


    //Teste 3

    it("should not be able to create outcome transaction without a valid balance", async ()=>{
        const response = await request(app).post("/transactions").send({
            title:"Guilherme",
            type:"outcome",
            value:"100000"
        })

        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual(
            {
                error:"Você não possui saldo o suficiente"
            }
        )

        

    })


})


const request =require ("supertest");
const app=require('../app')
let token;
var id;
const updateUser = {
  username: 'edwin70',
  email: 'adminss70@gmail.com',
  password: 'admin12345',
};
jest.setTimeout(100000);
describe('\ntesting users routes', () => {
    describe('Testing user registration', () => {
        test('should return the user who created account', async () => {
            const res = await request(app).post('/api/auth/register').send({
                username: "dark",
                email: "dark@gmail.com",
                password: "dark@123"
            })
            console.log(res.body)
            expect(res.statusCode).toBe(200)
            expect(typeof res.body).toBe('object')
        })
        
        // test('should return 500 for entering bad request', async () => {
        //     const res = await request(app).post('/api/auth/register').send({
        //         username: "NEW1",
        //         password: "Test@123"
        //     })
        //     console.log(res.body)
        //     expect(res.statusCode).toBe(500)
        // })
    })
    describe('POST api/auth/login', () => {
        test('should return the token of user who logged account', async () => {
            const res = await request(app).post('/api/auth/login').send({
                email: "dark@gmail.com",
                password: "dark@123"
            })
            console.log(res.body)
            token=res.body.token
            id = res.body.data._id;
            expect(res.statusCode).toBe(200)
            expect(typeof res.body).toBe('object')
        })
        test('should return 400 for entering unexist email', async () => {
             const res = await request(app).post('/api/auth/login').send({
                email: "emailnotin@test.com",
                 password: "Test@123"
                })
            expect(res.statusCode).toBe(400)
            expect(typeof res.body).toBe('object')
       })
       test('should return all users', async()=>{
        const res=await request(app).get('/api/users/all')
        .set('token',`Bearer ${token}`)
        //console.log(res.body)
        expect(res.statusCode).toBe(200)
        })
        test("should return a single user",async()=>{
            const res=await request(app).get(`/api/users/${id}`)
            .set('token',`Bearer ${token}`)
            console.log(res.body)
            console.log(id)
            console.log(token)
            expect(res.statusCode).toBe(200)
        })
        test('should update a user',async()=>{
            const res=await request(app).put(`/api/users/update/${id}`).send(updateUser)
            console.log(res.body)
            expect(res.statusCode).toBe(200)
        })
       })
    }) 

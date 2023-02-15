
const request =require ("supertest");
const app=require('../app')
let token;
let id;
const updateUser = {
  username: 'edwin70',
  email: 'adminss70@gmail.com',
  password: 'admin12345',
};
jest.setTimeout(100000);
describe('\ntesting users routes', () => {
    describe('POST api/auth/register', () => {
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
        
        test('should return 500 for entering bad request', async () => {
            const res = await request(app).post('/api/auth/register').send({
                username: "NEW1",
                password: "Test@123"
            })
            console.log(res.body)
            expect(res.statusCode).toBe(500)
        })
    })
    describe('POST api/auth/login', () => {
        test('should return the token of user who logged account', async () => {
            const res = await request(app).post('/api/auth/login').send({
                email: "dars@gmail.com",
                password: "dar@123"
            })
            console.log(res.body)
            token=res.body.token
            id = res.body._id;
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
    }) 
})
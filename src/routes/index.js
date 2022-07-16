import { Router } from "express";
const router = Router();

router.get('/', (req, res) => {
    res.render('index.ejs')
});
router.get('/user', (req, res) => {
    res.render('head.ejs')
});
router.get('/contacto',(req,res) =>{
    res.render('contacto.ejs')
});
router.get('/main',(req,res)=>{
    res.render('main.ejs')
});
router.get('/feed',(req,res)=>{
    res.render('feed.ejs')
})
router.get('/prueba',(req,res)=>{
    res.render('prueba.ejs')
})
export default router;
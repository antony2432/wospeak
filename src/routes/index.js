import { Router } from "express";
const router = Router();

router.get('/', (req, res) => {
    res.render('formulario.ejs')
});
router.get('/user', (req, res) => {
    res.send('Alessiwooo2')
})

export default router;
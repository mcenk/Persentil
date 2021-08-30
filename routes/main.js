const express= require ('express')
const router= express.Router()



router.get ('/', (req,res)=>{

    res.render('site/index')

})

router.get('/login', (req,res)=>{

    res.render('site/login')
})
router.post('/login', (req,res)=>{

    res.render('site/login')
})

router.get('/blog', (req,res)=>{

    Post.find({}).then(posts=>{

        res.render('site/blog',{posts:posts})
    })
})

router.get('/contact',(req,res)=>{

    res.render('site/contact')
})



module.exports= router
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
router.get('/',async (req, res) => {
  await Category.findAll({
    include:[Product]
}).then(data=>{
    res.json(data)
}).catch(err=>{
    res.status(500).json({msg:"oh noes! error!",err})
})
});

// find one category by its `id` value
router.get('/:id',async (req, res) => {
  id = req.params.id
await Category.findOne({
  where:{
    id: req.params.id,
  },
  include:[Product]
}).then(data=>{
  res.json(data)
}).catch(err=>{
  res.status(500).json({msg:"oh noes! error!",err})
})
});

// create a new category
router.post('/', (req, res) => {
  Category.create(req.body).then(newCat=>{
    res.json(newCat)
}).catch(err=>{
    res.status(500).json({msg:"oh noes! error!",err})
})
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update({
    category_name:req.body.category_name,
},
{
where:{
    id:req.params.id
}
}).then(category=>{
    if(!category[0]){
        return res.status(404).json({msg:"no such category or no change made!"})
    }
res.json(category)
}).catch(err=>{
res.status(500).json({
    msg:"internal server error",
    err
})
})
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where:{
        id:req.params.id
    }
    }).then(category=>{
        if(!category){
            return res.status(404).json({msg:"no such category!"})
        }
    res.json(category)
}).catch(err=>{
    res.status(500).json({
        msg:"internal server error",
        err
    })
})
});

module.exports = router;

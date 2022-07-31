const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  await Category.findAll({
    include:[Product]
}).then(data=>{
    res.json(data)
}).catch(err=>{
    res.status(500).json({msg:"oh noes! error!",err})
})
});

router.get('/:id',async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
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

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then(newCat=>{
    res.json(newCat)
}).catch(err=>{
    res.status(500).json({msg:"oh noes! error!",err})
})
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
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

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value

});

module.exports = router;

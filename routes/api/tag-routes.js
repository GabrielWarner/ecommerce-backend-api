const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  Tag.findAll({
    include: [
      Category,
      {
        model: Product,
        through:[ProductTag],
      }]
}).then(data=>{
    res.json(data)
}).catch(err=>{
    res.status(500).json({msg:"oh noes! error!",err})
})
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  id = req.params.id
  Tag.findOne({
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
  // create a new tag
  Tag.create(req.body).then(newTag=>{
    res.json(newTag)
}).catch(err=>{
    res.status(500).json({msg:"oh noes! error!",err})
})
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
Tag.update({
    tag_name:req.body.tag_name,
},
{
where:{
    id:req.params.id
}
}).then(tag=>{
    if(!tag[0]){
        return res.status(404).json({msg:"no such Tag or no change made!"})
    }
res.json({tag})
}).catch(err=>{
res.status(500).json({
    msg:"internal server error",
    err
})
})
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where:{
        id:req.params.id
    }
    }).then(tag=>{
        if(!tag){
            return res.status(404).json({msg:"no such tag!"})
        }
    res.json(tag)
}).catch(err=>{
    res.status(500).json({
        msg:"internal server error",
        err
    })
})
});

module.exports = router;

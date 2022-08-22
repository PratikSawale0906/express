var MongoClient=require("mongodb").MongoClient;
const url="mongodb://localhost:27017"
const DBNAME = "blogdb"
const COLLECTIONNAME="blog"
MongoClient.connect(url,function(err,db){
    if(err) throw err;
    console.log("Connected")
    var dbo=db.db(DBNAME)
    console.log(dbo)
    // dbo.createCollection(COLLECTIONNAME,function(err,res){
    //     if(err) throw err;
    //     console.log(COLLECTIONNAME+ "created")
    // })
    // var doc={
    //     'blogname':'mongo',
    //     'author':'axy'
    // }
    // var doc1={
    //     'blogname':'nodejs',
    //     'author':'pxy'
    // }
    // dbo.collection(COLLECTIONNAME).insertOne(doc,function(err,res){
    //     if(err) throw err;
    //     console.log(doc+" connected")
    // })
    // dbo.collection(COLLECTIONNAME).insertOne(doc1,function(err,res){
    //     if(err) throw err;
    //     console.log(doc+" connected")
    // })
    // dbo.collection(COLLECTIONNAME).find({}).toArray(function(err,result){
    //     if(err) throw err;
    //     // console.log(result)
    //     for(let x of result){
    //         console.log(x)
    //     }
    // })

    // var updatedoc={
    //     $set:{
    //         'Author':"Peter Joe"
    //     }
    // }
    // dbo.collection(COLLECTIONNAME).updateOne({author:'pxy'},updatedoc,function(err,res){
    //     if(err) throw err;
    //     console.log(res)
    // })

    var blog1={
        userName : 'Henry O',
        emailid : 'henryomac@gmail.com',
        blogarray:[{
            blogtitle:'One Fine Day',
            blogcontent:'//',
            blogDate: new Date()
        }]

    }
    var blog2={
        userName : 'Peter S',
        emailid : 'peters@gmail.com',
        blogarray:[{
            blogtitle:'TEch Updates',
            blogcontent:'//',
            blogDate: new Date()
        },{
            blogtitle:'New Libraries',
            blogcontent:'//',
            blogDate: new Date() 
        }]

    }
    add(dbo,blog1)
    add(dbo,blog2)
   
    var updateblog={
        $set:{
            'userName':"Peter Joe"
        }
    }
    dbo.collection(COLLECTIONNAME).updateOne({userName:'Henry O'},updateblog,function(err,res){
        if(err) throw err;
        console.log(res)
    })
    dbo.collection(COLLECTIONNAME).find({}).toArray(function(err,result){
        if(err) throw err;
        // console.log(result)
        for(let x of result){
            console.log(x)
        }
    })

})
function add(dbo,doc){
    dbo.collection(COLLECTIONNAME).insertOne(doc,function(err,res){
            if(err) throw err;
            console.log(doc+" connected")
        })
}
var assert=require('chai').assert
var http= require('http');
var rest= require('restler');

suite('API tests', function(){
    var mushroom = { type: 'chaga', otherName: 'Inonotus Obliquus', frequency: 'daily'
    };
var base ='http://localhost:3000';
test('should be able to add mushroom', function(done){rest.post(base+'/api/mushroom', {data:mushroom}).on('success',function(data){
            assert(data.name===mushroom.type);
            assert(data.otherName===mushroom.otherName);
            done();
            })
        })
    });

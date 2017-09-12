let bredis = {

    db : localStorage,
    prefix : 'bredis-',

    _arguments : function (arg){

    },

    init : function(){
        console.log('Browser Redis initialized')
    },

    use : function (prefix){
        this.prefix = prefix;
        console.log('Prefix changed to::', prefix)
    },

    set : function (){
        var self = this;

        var _set = function (key, value){
            var str_value = value;

            if (typeof value != 'string'){
                try{
                    str_value = JSON.stringify(value);
                } catch (e){
                    str_value = String(value)
                }
            }

            key = self.prefix + key
            self.db.setItem(key, str_value)
        }

        if (arguments.length === 0){
            throw 'Invalid parameters provided to set function'
            return
        }

        if (arguments.length === 1){
            if (Array.isArray( arguments[0] )){
                //Process multi insert
                if (arguments[0].length % 2 === 0){
                    for (var i = 0; i < arguments[0].length; i += 2){
                        _set(arguments[0][i], arguments[0][i + 1])
                    }
                } else {
                    throw 'Invalid length for array push'
                }
            } else {
                throw 'Invalid length for array push'
            }

            return
        }

        if (arguments.length === 2){
            _set(arguments[0], arguments[1])
        }
    },

    get : function (key){
        var self = this;
        if (Array.isArray(key)){
            var out = [];
            key.forEach(function(k){
                out.push(self.get(k))
            })

            return out;
        } else {
            var out = self.db.getItem(self.prefix + key)

            try{
                return JSON.parse(out);
            } catch (e){
                return out;
            }
        }
    },

    remove : function (key){
        var self = this;
        return self.db.removeItem(self.prefix + key)
    },
}

bredis.init();

window.bredis = bredis;

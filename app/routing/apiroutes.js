
var profiles = require("../data/friends")
var bodyParser = require("body-parser")
module.exports = function (app) {


    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    //Profiles======================================================



    app.get("/api/friends", function (req, res) {
        return res.json(profiles);
    });

    function callBackPostFriends(req, res) {
        var userData = req.body;

        var lowestDifference = 20000;
        var lowestIndex = -1;
        for(var i = 0; i < profiles.length; i++) {
            var profile = profiles[i];
            var totalDifference = 0;
            for(var j = 0; j < profile.scores.length; j++) {
                totalDifference = totalDifference + Math.abs(profile.scores[j] - userData.scores[j]);
            }
            if (totalDifference < lowestDifference) {
                lowestDifference = totalDifference;
                lowestIndex = i;
            }
        }
        res.json({
            
            matchingUser   : profiles[lowestIndex].name , 
            totalDifference: lowestDifference,
            matchingPhoto  : profiles[lowestIndex].photo

            
        });
        profiles.push(userData);
        console.log("you found a match" + userData);



        
    }


    app.post("/api/friends", bodyParser.json(), callBackPostFriends);
};


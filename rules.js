var key_o = 0;
var food = 7;
var water = 15;
var night = 5;


class Start extends Scene {
    create() {
        this.engine.setTitle(this.engine.storyData.Title); // TODO: replace this text using this.engine.storyData to find the story title
        this.engine.addChoice("Begin the story");
    }

    handleChoice() {
        this.engine.gotoScene(Location, this.engine.storyData.InitialLocation); // TODO: replace this text by the initial location of the story
    }
}

class Location extends Scene {
    create(key) {
        let locationData = this.engine.storyData.Locations[key]; // TODO: use `key` to get the data object for the current story location

        //console.log(locationData.Body)
        if(locationData.Choices == undefined) {
            this.engine.show(locationData.Body);
            this.engine.addChoice("The end.");
        }
        else{
            if(locationData.Food) food = 7;
            if(locationData == this.engine.storyData.Locations[this.engine.storyData.InitialLocation]) water = 15;
            if(night <= 0 && locationData.Shelter) night = 8;

            if(food <= 0) this.engine.gotoScene(Location, "hEnd");
            else if(water <= 0) this.engine.gotoScene(Location, "wEnd");
            else if(night <=0 && !locationData.Shelter) this.engine.gotoScene(Location, "fEnd");
            else {
                switch(key) {
                    case "a1":
                        
                        this.engine.show("[x][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                    case "a2":
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[x][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                    case "a3":
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[x][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                    case "a4":
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[x][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                    case "a5":
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[x][][][][]");
                        
                        break;
                    case "b1":
                        
                        this.engine.show("[][x][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                    case "b2":
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][x][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                    case "b3":
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][x][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                    case "b4":
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][x][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                    case "b5":
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][x][][][]");
                        
                        break;
                    case "c1":
                        
                        this.engine.show("[][][x][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                    case "c2":
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][x][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                    case "c4":
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][x][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                    case "c5":
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][x][][]");
                        
                        break;
                    case "d1":
                        
                        this.engine.show("[][][][x][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                    case "d2":
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][x][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                    case "d3":
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][x][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                    case "d4":
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][x][]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                    case "d5":
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][x][]");
                        
                        break;
                    case "e1":
                        
                        this.engine.show("[][][][][x]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                    case "e2":
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][x]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                    case "e3":
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][x]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                    case "e4":
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][x]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                    case "e5":
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][x]");
                        
                        break;
                    default:
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][x][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        this.engine.show("[][][][][]");
                        
                        break;
                }

                this.engine.show(locationData.Body); // TODO: replace this text by the Body of the location data
                this.engine.show("Nutrition left: " + food);
                this.engine.show("Hydration left: " + water);
                this.engine.show("Hours before dusk: " + night);
                
                if(locationData.Choices != undefined) { // TODO: check if the location has any Choices
                    for(let choice of locationData.Choices) { // TODO: loop over the location's Choices
                        //console.log(choice.Text)
                        if(choice.Text != "Open Door" || key_o == 1)this.engine.addChoice(choice.Text, choice); // TODO: use the Text of the choice
                        // TODO: add a useful second argument to addChoice so that the current code of handleChoice below works
                    }
                } else {
                    this.engine.addChoice("The end.")
                }
            }
        }
    }

    handleChoice(choice) {
        if(choice) {
            food--; water--; night--;
            if(choice.Text == "Stay in the shelter overnight.") night = 8;
            if(choice.Target == "a1") key_o = 1;
            this.engine.show("&gt; "+choice.Text);
            this.engine.gotoScene(Location, choice.Target);
        } else {
            this.engine.gotoScene(End);
        }
    }
}

class End extends Scene {
    create() {
        this.engine.show("<hr>");
        this.engine.show(this.engine.storyData.Credits);
    }
}

Engine.load(Start, 'myStory.json');
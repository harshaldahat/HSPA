import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component(
    {
        selector:'app-property-card',
        // template:'<h1>i am a card </h1>',
        templateUrl:'property-card.component.html',
        //styles : ['h1{font-weigh: normal;}']
        styleUrls:['property-card.component.css']
    }
)
export class PropertyCardComponent{
    Property={"Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000}
}
import {Component, Input} from "@angular/core";
import {Category} from "../model/Category";
import {Cost} from "../model/Cost";
/**
 * Created by nicasandra on 12/16/2016.
 */

@Component({
    selector: 'app-users',
    templateUrl: 'app/users/users.component.html'
})

export class UsersComponent {
    category: Category = new Category(null);
    cost: Cost = new Cost(null, null, null, null);

    selectedCategory = "c";

    category1: Category = new Category("Category 1");

    costs: Array<Cost> = [
        new Cost("Cost 1", 1000, this.category1, "Details 1")
    ];

    categories: Array<Category> = [
        new Category("Food"),
        new Category("Drink")
    ];

    addCategory() {
        this.categories.push(new Category(this.category.name));
        this.category.name = "";
    }

    deleteCategory(index) {
        this.categories.splice(index, 1);
    }

    deleteCost(index) {
        this.costs.splice(index, 1);
    }

    addCost() {
        if (this.selectedCategory != "new-category") {
            this.costs.push(new Cost(this.cost.name, this.cost.value, new Category(this.selectedCategory), this.cost.details));
        }
    }

    open(v) {
        this.selectedCategory = v;
        if (v === "new-category") {
            document.getElementById("open-modal").click();
            (<HTMLInputElement>document.getElementById("category-select")).value = "choose-category";
        }
    }

}
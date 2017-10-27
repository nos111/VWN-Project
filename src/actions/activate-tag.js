export function activateTag(allOrgs, tagsList,tag) {
    const index = tagsList.findIndex((element) => element.key == tag);
    
    if(tagsList[index].value == true) {
        tagsList[index].value = false
    } else if(tagsList[index].value == false) {
        tagsList[index].value = true;
    }
    let elementsToRender = [];
    let activeElements = [];
    if(tagsList != null) {
        allOrgs.forEach((element) => {
            var toAdd = false;
            var allFalse = false;
            for(var j = 0; j < tagsList.length; j++) {
                for(var i = 0; i < element.tags.length; i++) {
                    //console.log("comparing " + element.tags[i] + " with " + this.props.tags[j].key)
                    if(tagsList[j].value == true && element.tags[i] == tagsList[j].key) {
                        toAdd = true;
                        //console.log("comparing " + element.tags[i] + " with " + tagsList[j].key)
                    }
                }
            }
            
            if(toAdd == true) {
                activeElements.push(element);
                console.log(element)
                toAdd = false;
            }
        });
        if(activeElements.length == 0) {
            activeElements = allOrgs
        }
    }
    return {
        type: "ACTIVATE-TAG",
        payload: {tags: tagsList, activeOrgs: activeElements}
    }
}
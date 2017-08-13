(function () {
    var students = [{
            name: 'Liudmyla',
            lastName: 'Bashta',
            img: 'https://www.plagiarismtoday.com/wp-content/uploads/2016/07/nyancat-385-sized.jpg',
            coverImg: 'http://i2.kym-cdn.com/photos/images/facebook/000/243/865/8f3.jpg',
            email: 'liudmyla.bashta@gmail.com',
            skills: ['Javascript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Chapkailo',
            img: 'https://s-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5--pikachu-halloween-costume-diy-halloween-costumes.jpg',
            coverImg: 'http://fbcovershub.com/media/cover-250-beautiful-seaside-fb-cover-1388015476.jpg',
            email: 'romafromukraine@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystyna',
            lastName: 'Dalivska',
            img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg',
            coverImg: 'https://sky.easypano.com/EPSUpload2/Pano/2017/04-12/12/636275969355928205/560_315.jpg',
            email: 'khrystynadalivska@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Ivan',
            lastName: 'Gnatyshyn',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'gnatyshyn.ivan@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: "Hun'ka",
            img: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg',
            coverImg: 'http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg',
            email: 'andriyggg@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Maksym',
            lastName: 'Izmailov',
            img: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_960_720.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/03/06/05/03/sunrise-1239728_960_720.jpg',
            email: 'maksym.izmailov.lv@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Taras',
            lastName: 'Kharkhalis',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'taraskharkhalis97@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystia',
            lastName: 'Kondratovych',
            img: 'https://www.webdesign.org/img_articles/21726/17.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/10/13/10/37/dandelion-1737324_960_720.jpg',
            email: 'khrustyk@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Iuliia',
            lastName: 'Kurylo',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljkhtuNjmEz2YeriPLPdntnTKNAwXFOAQSx1u6yAkPhYYw8-Pnw',
            coverImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-qepvLICH8tsGuZqbZwpO7rk5afp274Lu4bgjai8Uo30gDKifA',
            email: 'iulia.kurylo@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Mandziuk',
            img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
            coverImg: 'http://html.com/wp-content/uploads/very-large-flamingo.jpg',
            email: 'rmandzyuk94@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Oleh',
            lastName: 'Marko',
            img: 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
            coverImg: 'http://wiki-carpathians.com/wp-content/uploads/2015/02/climate-carpathians.jpg',
            email: 'olehmarko@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anatoliy',
            lastName: 'Mazur',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'mail4tolik@gmail.com',
            skills: ['JavaScript', 'CSS', 'HTML']
        },
        {
            name: 'Vitaliy',
            lastName: 'Palyushok',
            img: 'https://www.mammoth.com.au/res/images/mammothcloud/person-img.png',
            coverImg: 'http://facebookcovers.piz18.com/wp-content/uploads/2012/04/geek-fb-cover.jpg',
            email: 'xskeletons@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Prokopiak',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'sprokopyak96@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Sendun',
            img: 'http://i.piccy.info/i9/a25aa836358fb23a05d6e9207c976dd9/1500482900/30480/1163444/537377255ws00241_57th_annua.jpg',
            coverImg: 'http://i.piccy.info/i9/b311de1aaff52532b361a178e8e35de4/1500482959/135850/1163444/0008540461_10.jpg',
            email: 'steve.neeson21@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: 'Soroka',
            img: 'https://www.planwallpaper.com/static/images/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
            coverImg: 'https://www.planwallpaper.com/static/images/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
            email: 'andriisoroka@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Illya',
            lastName: 'Syniuk',
            img: 'http://cdn-www.dailypuppy.com/dog-images/riley-the-golden-retriever_61755_2016-09-27_w450.jpg',
            coverImg: 'https://www.facebook.com/photo.php?fbid=578802345636154&set=a.326403767542681.1073741828.100005191805447&type=3&theater',
            email: 'illyasynuik@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrew',
            lastName: 'Tantsiura',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'andrii.tans@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Liliya',
            lastName: 'Tserkovna',
            img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c0.17.160.160/p160x160/14725559_311214412585028_1352062715786494390_n.jpg?oh=b2cbcb3de774187b75d5253a276bc2f7&oe=59F5D47B',
            coverImg: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14368772_295189700854166_8626244722206545788_n.jpg?oh=02cf7516f9337bc439a42595ff893821&oe=5A051EC4',
            email: 'lilichkaTserkovna@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anton',
            lastName: 'Zhygalov',
            img: 'http://static.tvtropes.org/pmwiki/pub/images/Hello_Kitty_Pink_2981.jpg',
            coverImg: 'https://thumb1.shutterstock.com/display_pic_with_logo/156640/208511908/stock-photo-arad-romania-september-hello-kitty-pattern-printed-on-cardboard-box-studio-shot-208511908.jpg',
            email: 'antonzhygalov@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        }
    ];

    var sortCounter = {
            name: 1,
            email: 1,
            skills: 1
        };
    var index = -1;

    var container = document.getElementById("container");

    function formCreate() {
        var form = document.createElement("form");
        container.appendChild(form);

        var labels = [
            {
                name: "firstNameLbl",
                attributes: {
                    textNode: "First name",
                    for: "firstNameInput"
                }
            },
            {
                name: "secondNameLbl",
                attributes: {
                    textNode: "Last name",
                    for: "lastNameInput"
                }
            },
            {
                name: "emailLbl",
                attributes: {
                    textNode: "Email address",
                    for: "emailInput"
                }
            },
            {
                name: "pictureLbl",
                attributes: {
                    textNode: "Link for profile picture",
                    for: "pictureInput"
                }
            },
            {
                name: "skillsLbl",
                attributes: {
                    textNode: "Skills",
                    for: "skillsInput"
                }
            }
        ];

        var inputs = [
            {
                name: "firstNameInput",
                attributes: {
                    placeholder: "First name",
                    id: "firstNameInput",
                    type: "text"
                }
            },
            {
                name: "lastNameInput",
                attributes: {
                    placeholder: "Last name",
                    id: "lastNameInput",
                    type: "text"
                }
            },
            {
                name: "emailInput",
                attributes: {
                    placeholder: "Email",
                    id: "emailInput",
                    type: "email"
                }
            },
            {
                name: "pictureInput",
                attributes: {
                    placeholder: "Picture url",
                    id: "pictureInput",
                    type: "url"
                }
            },
            {
                name: "skillsInput",
                attributes: {
                    placeholder: "Skills",
                    id: "skillsInput",
                    type: "text"
                }
            }
        ];

        var inputedElements = [];        

        for (var i = 0; i < labels.length; i++) {
            var formGroup = document.createElement("div");
            formGroup.className = "form-group";
            form.appendChild(formGroup);

            var label = document.createElement("label");
            var textNode = document.createTextNode(labels[i].attributes.textNode);
            label.appendChild(textNode);

            inputedElements[i] = document.createElement("input");
            for (attr in inputs[i].attributes) {
                inputedElements[i].setAttribute(attr, inputs[i].attributes[attr]);
            }
            inputedElements[i].className = "form-control";

            formGroup.appendChild(label);
            formGroup.appendChild(inputedElements[i]);
        }

        var formGroupButtons = document.createElement("div");
        formGroupButtons.className = "form-group";
        form.appendChild(formGroupButtons);

        var save = document.createElement("button");
        textNode = document.createTextNode("Save");
        save.appendChild(textNode);
        save.setAttribute("type", "button");
        save.className = "btn btn-default save";

        var cancel = document.createElement("button");
        textNode = document.createTextNode("Cancel");
        cancel.appendChild(textNode);
        cancel.setAttribute("type", "reset");
        cancel.className = "btn btn-default cancel";

        formGroupButtons.appendChild(save);
        formGroupButtons.appendChild(cancel);
    }

    function createStudentTr(student) {
        element = document.createElement("tr");          
        // name
        element.name = document.createElement("td");
        element.appendChild(element.name);
        var textNode = document.createTextNode(`${student.name} ${student.lastName}`);
        element.name.appendChild(textNode);
        // email
        element.email = document.createElement("td");
        element.appendChild(element.email);
        textNode = document.createTextNode(student.email);
        element.email.appendChild(textNode);
        // profile picture
        element.profilePhoto = document.createElement("td");
        var img = document.createElement("img");
        img.className = "profile-image";
        img.setAttribute('src', student.img);
        element.profilePhoto.appendChild(img);
        element.appendChild(element.profilePhoto);
        // skills
        element.skills = document.createElement("td");
        element.appendChild(element.skills);
        textNode = document.createTextNode(student.skills.join(", "));
        element.skills.appendChild(textNode);
        // controls
        element.controls = document.createElement("td");
        element.appendChild(element.controls);
        // edit
        var btnEdit = document.createElement("button");
        element.controls.appendChild(btnEdit);
        var glyphiconEdit = document.createElement("span");
        glyphiconEdit.className = "glyphicon glyphicon-edit edit";
        btnEdit.appendChild(glyphiconEdit);
        btnEdit.classList.add("edit");
        // delete
        var btnDelete = document.createElement("button");
        element.controls.appendChild(btnDelete);
        var glyphiconDelete = document.createElement("span");
        glyphiconDelete.className = "glyphicon glyphicon-trash delete";
        btnDelete.classList.add("delete");
        btnDelete.appendChild(glyphiconDelete);

        document.getElementsByTagName("tbody")[0].appendChild(element);
    }

    function theadCreate() {
        var thead = document.createElement("thead");
        document.getElementsByTagName("table")[0].appendChild(thead);
        var tcaption = document.createElement("tr");
        thead.appendChild(tcaption);

        var tcaptionTh = [];
        var tcaptionThStrings = ["Student", "Email", "Profile picture", "Skills", "Controls"];

        for (var i = 0; i < tcaptionThStrings.length; i++) {
            tcaptionTh[i] = document.createElement("th");      
            var textNode = document.createTextNode(tcaptionThStrings[i]);
            tcaptionTh[i].appendChild(textNode);
            if (textNode.nodeValue === "Student" || textNode.nodeValue === "Email" || textNode.nodeValue === "Skills") {
                var notSorted = document.createElement("span");
                notSorted.className = "glyphicon glyphicon-sort";
                tcaptionTh[i].appendChild(notSorted);
            }
            tcaption.appendChild(tcaptionTh[i]);
        }
    }

    function tbodyCreate() {
        var tbody = document.createElement("tbody");
        document.getElementsByTagName("table")[0].appendChild(tbody);
        for (var i = 0; i < students.length; i++) {
            createStudentTr(students[i]);
        }
    }

    function tableCreate() {
        var table = document.createElement("table");
        table.className = "table table-hover";
        container.appendChild(table);
        theadCreate();
        tbodyCreate();     
    }

    function resreshTable() {
        var tbody = document.getElementsByTagName("tbody")[0];
        while (tbody.childNodes.length) {
            tbody.childNodes[0].remove();
        }
        tbodyCreate();
    }

    function fillForm(student) {
        students.forEach(function(el, i){
            if (el.name === student[0] && el.lastName === student[1]) {
                document.getElementById("firstNameInput").value = el.name;
                document.getElementById("lastNameInput").value = el.lastName;
                document.getElementById("emailInput").value = el.email;
                document.getElementById("pictureInput").value = el.img;
                document.getElementById("skillsInput").value = el.skills.join(", "); // array to string
                index = i;
            }
        });
    }

    function edit(student, row) {
        row.childNodes[0].childNodes[0].nodeValue = `${student.name} ${student.lastName}`;
        row.childNodes[1].childNodes[0].nodeValue = student.email;
        row.childNodes[2].childNodes[0].setAttribute('src', student.img);
        row.childNodes[3].childNodes[0].nodeValue = student.skills.join(", ");
    }

    function remove(student) {
        var tbody = document.getElementsByTagName("tbody")[0];
        students.forEach(function(el, i) {
            if (student[0] === el.name && student[1] === el.lastName) {
                students.splice(i, 1);
                tbody.childNodes[i].remove();
            }
        });
    }

    function validation() {
        var emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var nameValid = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
        var imgValid = /\.(jpeg|jpg|gif|png)$/;
        var skillsValid = /^\w(\s*,?\s*\w)*$/;
        if (!nameValid.test(document.getElementById("firstNameInput").value) || !nameValid.test(document.getElementById("lastNameInput").value)) {
            alert("Please, input correct data. Name and last name can not be empty or contain special symbols or numbers.");
            return false;
        }
        if (!emailValid.test(document.getElementById("emailInput").value)) {
            alert("Please, input correct email!");
            return false;
        }
        if (!imgValid.test(document.getElementById("pictureInput").value)) {
            alert("Pleae, input correct image link!");
            return false;
        }
        if (!skillsValid.test(document.getElementById("skillsInput").value)) {
            alert("Skills shouls be comma separated string!");
            return false;
        }
        return true;
    }

    function sortAZ(prop) {
        students.sort(function(a, b) {
            if (a[prop] < b[prop]) {
                return -1;
            }
            if (a[prop] > b[prop]) {
                return 1;
            }
            return 0;
        });
    }

    function sortZA(prop) {
        students.sort(function(a, b) {
            if (a[prop] > b[prop]) {
                return -1;
            }
            if (a[prop] < b[prop]) {
                return 1;
            }
            return 0;
        });
    }

    function studentExists(student) {
        var exists = false;
        students.forEach(function(el) {
            if (el.name === student.name && el.lastName === student.lastName) {
                exists = true;
            }
        });
        return exists;
    }

        // tbody click
    function tbodyClick(event) {
        var target = event.target;
        if (target.classList.contains("edit")) {
            target = target.parentNode.nodeName === "BUTTON" ? target.parentNode.parentNode.parentNode : target.parentNode.parentNode;
            var student = target.firstChild.childNodes[0].nodeValue.split(' '); // стрінг в масив
            fillForm(student);
        } else if (target.classList.contains("delete")) {
            target = target.parentNode.nodeName === "BUTTON" ? target.parentNode.parentNode.parentNode : target.parentNode.parentNode;
            var student = target.firstChild.childNodes[0].nodeValue.split(' ');
            remove(student); 
        } else {
            target = target.nodeName === "IMG" ? target.parentNode.parentNode : target.parentNode;
            alert(target.firstChild.childNodes[0].nodeValue);
        }
    };   


    // Save button click 
    function saveButtonClick(event) {
        if (validation()) {
            var newStudent = {};
            newStudent.name = document.getElementById("firstNameInput").value;
            newStudent.lastName = document.getElementById("lastNameInput").value;
            newStudent.img = document.getElementById("pictureInput").value;
            newStudent.coverImg = "";
            newStudent.email = document.getElementById("emailInput").value;
            newStudent.skills = document.getElementById("skillsInput").value.split(" ");
            if (index < 0) {
                if (studentExists(newStudent)) {
                    alert(`Student ${newStudent.name} ${newStudent.lastName} already exists. Try to edit information about him/her.`);
                    return;
                }
                students.push(newStudent);
                createStudentTr(newStudent);
            } else {
                students[index] = Object.assign(students[index], newStudent);
                edit(students[index], document.getElementsByTagName("tbody")[0].childNodes[index]);
                index = -1;
            }
            formClear();
        }
    };

    // sorting
    function theadClick(event) {
        var target = event.target;
        target = target.parentNode.nodeName === "TH" ? target.parentNode : target;
        var sortBy = target.firstChild.nodeValue.toLowerCase();
        if (sortBy === "student") {
            sortBy = "name";
        }
        // set other elements class "glyphicon glyphicon-sort"
        document.getElementsByTagName("thead")[0].firstChild.childNodes.forEach(function(el) {
            if (el.firstChild.nodeValue !== sortBy && el.childNodes[1]) {
                el.childNodes[1].className = "";
                el.childNodes[1].classList.add("glyphicon", "glyphicon-sort");
                for (var prop in sortCounter) {
                    if (prop !== sortBy) {
                        sortCounter[prop] = 1;
                    }
                }
            }
        });
        if (sortCounter[sortBy] === 1) {
            sortAZ(sortBy);
            target.childNodes[1].className = "";
            target.childNodes[1].classList.add("glyphicon", "glyphicon-sort-by-alphabet");
            sortCounter[sortBy] = -1;
        } else if (sortCounter[sortBy] === -1){
            sortZA(sortBy);
            target.childNodes[1].className = "";
            target.childNodes[1].classList.add("glyphicon", "glyphicon-sort-by-alphabet-alt");
            sortCounter[sortBy] = 1;
        }
        resreshTable();        
    };

    function formClear(event) {
        document.getElementsByTagName("form")[0].reset();
    }

    formCreate();
    tableCreate();
    document.getElementsByTagName("thead")[0].addEventListener("click", theadClick);
    document.getElementsByClassName("save")[0].addEventListener("click", saveButtonClick);
    document.getElementsByTagName("tbody")[0].addEventListener("click", tbodyClick);
})();
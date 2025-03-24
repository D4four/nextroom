(function() {
    function SliderClip(el) {
        var self = this;
        this.el = el;
        this.Slides = Array.prototype.slice.call(this.el.querySelectorAll('li'));
        this.Nav = Array.prototype.slice.call(this.el.querySelectorAll('nav a'));
        this.totalSlides = this.Slides.length;
        this.current = 0;
        this.autoPlay = true;
        this.timeTrans = 3000;
        this.IndexElements = [];
        this.bottomText = document.querySelector('.bottom_text');
        this.bottomAboutText = document.querySelector('.bottom_about_text');
        // this.textData = [
        //     { num: "01.", text: "проект спальни", about: "Каждая деталь этой спальни создана с учётом индивидуальных пожеланий клиента." },
        //     { num: "02.", text: "проект гостиной", about: "Гостиная сочетает комфорт и стиль, отражая вкус её владельцев." },
        //     { num: "03.", text: "проект кухни", about: "Функциональная и эстетичная кухня, созданная для удобства и вдохновения." }
        // ];

        this.textData = [
            { num: "", text: "", about: "" },
            { num: "", text: "", about: "" },
            { num: "", text: "", about: "" }
        ];


        for (var i = 0; i < this.totalSlides; i++) {
            this.IndexElements.push(i);
        }

        this.setCurret();
        this.initEvents();
    }

    SliderClip.prototype.setCurret = function() {
        this.Slides[this.current].classList.add('current');
        this.Nav[this.current].classList.add('current_dot');
        this.updateText(this.current);
    };

    SliderClip.prototype.initEvents = function() {
        var self = this;

        this.Nav.forEach(function(dot, index) {
            dot.addEventListener('click', function(event) {
                event.preventDefault();
                self.changeSlide(index);
            });
        });

        this.el.addEventListener('mouseenter', function() {
            self.autoPlay = false;
        });
        this.el.addEventListener('mouseleave', function() {
            self.autoPlay = true;
        });

        setInterval(function() {
            if (self.autoPlay) {
                self.current = self.current < self.Slides.length - 1 ? self.current + 1 : 0;
                self.changeSlide(self.current);
            }
        }, this.timeTrans);
    };

    SliderClip.prototype.changeSlide = function(index) {
        this.Nav.forEach(function(dot) {
            dot.classList.remove('current_dot');
        });
        
        this.Slides.forEach(function(slide) {
            slide.classList.remove('prev', 'current');
        });
        
        var prevElements = this.IndexElements.filter(function(value) {
            return value < index;
        });
        
        var self = this;
        prevElements.forEach(function(indexPrevEle) {
            self.Slides[indexPrevEle].classList.add('prev');
        });
        
        this.Slides[index].classList.add('current');
        this.Nav[index].classList.add('current_dot');
        this.updateText(index);
    };

    SliderClip.prototype.updateText = function(index) {
        if (this.textData[index]) {
            this.bottomText.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
            this.bottomAboutText.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
            
            this.bottomText.style.opacity = 0;
            this.bottomText.style.transform = "translateY(15px)";
            this.bottomAboutText.style.opacity = 0;
            this.bottomAboutText.style.transform = "translateY(15px)";
            
            setTimeout(() => {
                this.bottomText.innerHTML = `<p class="bottom_text_item_1">${this.textData[index].num}</p>
                                             <p class="bottom_text_item_2">${this.textData[index].text}</p>`;
                this.bottomAboutText.innerHTML = this.textData[index].about;
                
                this.bottomText.style.opacity = 1;
                this.bottomText.style.transform = "translateY(0)";
                this.bottomAboutText.style.opacity = 1;
                this.bottomAboutText.style.transform = "translateY(0)";
            }, 500);
        }
    };

    var slider = new SliderClip(document.querySelector('.slider'));
})();

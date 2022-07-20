import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


new gianniAccordion({
    elements: ".faq__accordion .faq__item",
    trigger: "[data-accordion-element-trigger]",
    content: "[data-accordion-element-content]",

});
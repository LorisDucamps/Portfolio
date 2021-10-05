<template>
    <!-- PREVOIR UN SPRITE POUR LES ICONES SOCIALS -->
    <ul class="social flex align-items-center">
        <li>
            <base-button link type="btn btn__link btn__social" href="https://github.com/LKA-LORIS" target="_blank">
                <svg class="icon">
                    <use v-bind="{ 'xlink:href': require('../../assets/svg/sprite.svg') + '#github' }"></use>
                </svg>
            </base-button>
        </li>
        <li>
            <base-button link type="btn btn__link btn__social" href="#" target="_blank">
                <svg class="icon">
                    <use v-bind="{ 'xlink:href': require('../../assets/svg/sprite.svg') + '#twitter' }"></use>
                </svg>
            </base-button>
        </li>
        <li>
            <base-button link type="btn btn__link btn__social" href="#" target="_blank">
                <svg class="icon">
                    <use v-bind="{ 'xlink:href': require('../../assets/svg/sprite.svg') + '#linkedin' }"></use>
                </svg>
            </base-button>
        </li>
    </ul>
</template>
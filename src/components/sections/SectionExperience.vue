<script setup>
import ItemObserver from '@/components/items/ItemObserver.vue';
</script>

<template>
    <section id="experience" class="pb-12 pt-8 xl:pb-16 xl:pt-12">
        <ItemObserver v-slot="{ isVisible }">
            <h2
                class="text-center text-h1 font-light uppercase"
                :class="isVisible ? 'fade-in-primary' : 'invisible'"
            >
                Experience
            </h2>
            <div class="container" :class="isVisible ? 'fade-in-down' : 'invisible'">
                <div
                    class="mt-10 grid justify-center gap-y-4 sm:grid-cols-[23.75rem] md:grid-cols-[20rem_23.75rem] md:items-center xl:mt-16 xl:grid-cols-[21.875rem_31.875rem] xl:gap-x-32"
                >
                    <h3 class="text-h2 font-medium">Freelance</h3>
                    <div class="rounded-common bg-primary-common p-8 shadow-xl md:col-start-2">
                        <span class="block text-h3 font-bold">Music Producer</span>
                        <span class="mt-2 block">05/2017 - Present</span>
                        <ul class="mt-4 list-disc pl-8 text-muted-text">
                            <li>
                                Working with artists to create songs, making sure they reflect their
                                artistic vision and meet market trends.
                            </li>
                            <li>
                                Collaborating with other producers to create unique musical
                                compositions, and collectively improve skills.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </ItemObserver>
    </section>
</template>

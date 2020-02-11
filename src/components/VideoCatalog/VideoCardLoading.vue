<template>
  <div class="container md:flex mb-4 px-6 pt-2 pb-10 flex-wrap bg-background-neutral opacity-75 contentPlaceholderWrapper">
      <div class="title p-4" v-html="title" />
    <div class="flex justify-between pt-2 pb-10 px-4">
      <div class="flex flex-col h-40 w-1/3 bg-gray-200 rounded-lg contentPlaceholderImage mr-6" />
      <div class="w-2/3" v-html="description" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoCardLoading',
  data () {
    return {
      title:
          '<span>_______________</span> <span>____</span> <span>____________________________</span>',
      description: '<p>' +
        '<span>_________</span> ' +
        '<span>______________</span> <span>__________</span>' +
        ' <span>_________________</span> <span>_____________________</span> ' +
        '<span>_____________________</span> <span>___________________</span> ' +
        '<span>________</span> <span>__________________________</span>' +
        ' <span>______________________________</span> <span>_______</span> ' +
        '<span>_________________</span> <span>____________________</span> <span>_______________</span> ' +
        '<span>____</span> <span>________________</span> <span>_______</span> ' +
        '<span>_____________________________</span> <span>_________</span> ' +
        '<span>________________</span> <span>______________</span> ' +
        '<span>________________________</span> ' +
        '<span>______________________________________</span>' +
        '</p>'
    }
  }
}
</script>

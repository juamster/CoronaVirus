<template>
  <div>
    <div class="ticker-wrap">
      <div class="ticker">
        <div class="ticker__item">Smash that virus & save humanity</div>
        <div class="ticker__item">Wash your hands, use disinfectant, keep away from other people.</div>

        <div class="ticker__item">
          A poem for the occastion:
          Lockdown
          Yes there is fear.
          Yes there is isolation.
          Yes there is panic buying.
          Yes there is sickness.
          Yes there is even death.
          But,
          They say that in Wuhan after so many years of noise
          You can hear the birds again.
          They say that after just a few weeks of quiet
          The sky is no longer thick with fumes
          But blue and grey and clear.
          They say that in the streets of Assisi
          People are singing to each other
          across the empty squares,
          keeping their windows open
          so that those who are alone
          may hear the sounds of family around them.
          They say that a hotel in the West of Ireland
          Is offering free meals and delivery to the housebound.
          Today a young woman I know
          is busy spreading fliers with her number
          through the neighbourhood
          So that the elders may have someone to call on.
          Today Churches, Synagogues, Mosques and Temples
          are preparing to welcome
          and shelter the homeless, the sick, the weary
          All over the world people are slowing down and reflecting
          All over the world people are looking at their neighbours in a new way
          All over the world people are waking up to a new reality
          To how big we really are.
          To how little control we really have.
          To what really matters.
          To Love.
          So we pray and we remember that
          Yes there is fear.
          But there does not have to be hate.
          Yes there is isolation.
          But there does not have to be loneliness.
          Yes there is panic buying.
          But there does not have to be meanness.
          Yes there is sickness.
          But there does not have to be disease of the soul
          Yes there is even death.
          But there can always be a rebirth of love.
          Wake to the choices you make as to how to live now.
          Today, breathe.
          Listen, behind the factory noises of your panic
          The birds are singing again
          The sky is clearing,
          Spring is coming,
          And we are always encompassed by Love.
          Open the windows of your soul
          And though you may not be able
          to touch across the empty square,
          Sing.
          March 13th 2020 - A poem by Richard Hendrick, a friar in the Roman Catholic order
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TickerComponent",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  box-sizing: border-box;
}
$duration: 300s;

@-webkit-keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.ticker-wrap {
  position: fixed;
  top: 0;
  width: 100%;
  overflow: hidden;
  height: 4rem;
  background-color: rgba(#000, 0.9);
  padding-left: 100%;
  box-sizing: content-box;

  .ticker {
    display: inline-block;
    height: 4rem;
    line-height: 4rem;
    white-space: nowrap;
    padding-right: 100%;
    box-sizing: content-box;

    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-name: ticker;
    animation-name: ticker;
    -webkit-animation-duration: $duration;
    animation-duration: $duration;

    &__item {
      display: inline-block;

      padding: 0 2rem;
      font-size: 2rem;
      color: white;
    }
  }
}

body {
  padding-bottom: 5rem;
}
h1,
h2,
p {
  padding: 0 5%;
}
</style>

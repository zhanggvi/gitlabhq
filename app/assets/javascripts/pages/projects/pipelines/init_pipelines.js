import Pipelines from '~/pipelines';

export default () => {
  const { controllerAction } = document.querySelector('.js-pipeline-container').dataset;
  const pipelineStatusUrl = `${document
    .querySelector('.js-pipeline-tab-link a')
    .getAttribute('href')}/status.json`;

  // eslint-disable-next-line no-new
  new Pipelines({
    initTabs: true,
    pipelineStatusUrl,
    tabsOptions: {
      action: controllerAction,
      defaultAction: 'pipelines',
      parentEl: '.pipelines-tabs',
    },
  });
};

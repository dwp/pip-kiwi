//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/daily-living-qualifying-period-answer', function (req, res) {

  const answer = req.session.data['dailyLivingQualifyingPeriod']

  if (answer === 'yes') {
    return res.redirect('/v1/pips/qppts-daily-living-q2')
  }

  if (answer === 'no-enter-date') {
    return res.redirect('/v1/pips/qppts-daily-living-q2')
  }

  if (answer === 'no-not-met') {
    return res.redirect('/v1/make-a-decision/make-a-decision-tasklist-move-to-pipcs')
  }

  if (answer === 'split-rate') {
    return res.redirect('/v1/make-a-decision/make-a-decision-tasklist-move-to-pipcs')
  }

  // Fallback if nothing selected
  return res.redirect('back')
})

router.post('/daily-living-nine-months-answer', function (req, res) {

  const qualifyingPeriod = req.session.data['dailyLivingQualifyingPeriod']
  const nineMonths = req.session.data['dailyLivingForNineMonths']

  // Q1 = yes, Q2 = yes
  if (qualifyingPeriod === 'yes' && nineMonths === 'yes') {
    return res.redirect('/v1/make-a-decision/make-a-decision-tasklist')
  }

  // Q1 = no-enter-date, Q2 = no
  if (qualifyingPeriod === 'no-enter-date' && nineMonths === 'no') {
    return res.redirect('/v1/make-a-decision/make-a-decision-tasklist')
  }

  // Q1 = no-enter-date, Q2 = yes
  if (qualifyingPeriod === 'no-enter-date' && nineMonths === 'yes') {
    return res.redirect('/v1/make-a-decision/make-a-decision-tasklist-move-to-pipcs')
  }

  // Q1 = yes, Q2 = no
  if (qualifyingPeriod === 'yes' && nineMonths === 'no') {
    return res.redirect('/v1/make-a-decision/make-a-decision-tasklist-move-to-pipcs')
  }

  return res.redirect('back')
})

router.post('/mobility-qualifying-period-answer', function (req, res) {

  const answer = req.session.data['mobilityQualifyingPeriod']

  if (answer === 'yes' || answer === 'no-enter-date') {
    return res.redirect('/v1/pips/qppts-mobility-q2')
  }

  if (answer === 'no-not-met' || answer === 'split-rate') {
    return res.redirect('/v1/make-a-decision/make-a-decision-tasklist-move-to-pipcs')
  }

  return res.redirect('back')
})

router.post('/mobility-nine-months-answer', function (req, res) {

  const qualifyingPeriod = req.session.data['mobilityQualifyingPeriod']
  const nineMonths = req.session.data['mobilityLikelyToContinue']

  if (
    (qualifyingPeriod === 'yes' && nineMonths === 'yes') ||
    (qualifyingPeriod === 'no-enter-date' && nineMonths === 'no-not-likely')
  ) {
    return res.redirect('/v1/make-a-decision/make-a-decision-tasklist')
  }

  if (
    (qualifyingPeriod === 'yes' && nineMonths === 'no-not-likely') ||
    (qualifyingPeriod === 'no-enter-date' && nineMonths === 'yes')
  ) {
    return res.redirect('/v1/make-a-decision/make-a-decision-tasklist-move-to-pipcs')
  }

  return res.redirect('back')
})

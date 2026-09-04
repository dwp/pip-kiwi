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

router.post('/payability-q1-answer', function (request, response) {

  var hospitalStay = request.session.data['hospital-stay']

  if (hospitalStay == 'pause') {

    response.redirect('/v1/make-a-decision/make-a-decision-tasklist')

  } else {

    request.session.data['hospitalStayStatus'] = 'Completed'

    if (hospitalStay == 'yes') {
      response.redirect('/v1/make-a-decision/make-a-decision-tasklist-move-to-pipcs')
    } else {
      response.redirect('/v1/make-a-decision/make-a-decision-tasklist')
    }

  }

})

router.post('/payability-q2-answer', function (request, response) {

  var careHome = request.session.data['care-home']

  if (careHome == 'pause') {

    response.redirect('/v1/make-a-decision/make-a-decision-tasklist')

  } else {

    request.session.data['careHomeStatus'] = 'Completed'

    if (careHome == 'yes') {
      response.redirect('/v1/make-a-decision/make-a-decision-tasklist-move-to-pipcs')
    } else {
      response.redirect('/v1/make-a-decision/make-a-decision-tasklist')
    }

  }

})

router.post('/payability-q3-answer', function (request, response) {

  var nursingHome = request.session.data['nursing-home']

  if (nursingHome == 'pause') {

    response.redirect('/v1/make-a-decision/make-a-decision-tasklist')

  } else {

    request.session.data['nursingHomeStatus'] = 'Completed'

    if (nursingHome == 'yes') {
      response.redirect('/v1/make-a-decision/make-a-decision-tasklist-move-to-pipcs')
    } else {
      response.redirect('/v1/make-a-decision/make-a-decision-tasklist')
    }

  }

})


router.post('/payability-q4-answer', function (request, response) {

  var rescolStay = request.session.data['rescol-stay']

  if (rescolStay == 'pause') {

    response.redirect('/v1/make-a-decision/make-a-decision-tasklist')

  } else {

    request.session.data['rescolStayStatus'] = 'Completed'

    if (rescolStay == 'yes') {
      response.redirect('/v1/make-a-decision/make-a-decision-tasklist-move-to-pipcs')
    } else {
      response.redirect('/v1/make-a-decision/make-a-decision-tasklist')
    }

  }

})

router.post('/payability-q5-answer', function (request, response) {

  var prisonStay = request.session.data['prison-stay']

  if (prisonStay == 'pause') {

    response.redirect('/v1/make-a-decision/make-a-decision-tasklist')

  } else {

    request.session.data['prisonStayStatus'] = 'Completed'

    if (prisonStay == 'yes') {
      response.redirect('/v1/make-a-decision/make-a-decision-tasklist-move-to-pipcs')
    } else {
      response.redirect('/v1/make-a-decision/make-a-decision-tasklist')
    }

  }

})
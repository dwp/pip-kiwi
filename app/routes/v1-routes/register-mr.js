module.exports = function (router) {

  router.post('/how-disagree', function (req, res) {

    const howDisagree = req.session.data.howDisagree

    if (howDisagree === 'phone-now') {
      res.redirect('/v1/register-mr/how-were-they-informed')
    } else if (howDisagree === 'phone-later') {
      res.redirect('/v1/register-mr/advise-callback')
    } else if (howDisagree === 'paper-form') {
      res.redirect('/v1/register-mr/download-form-next-steps')
    } else {
      res.redirect('/v1/register-mr/register-mr')
    }

  })

  router.post('/informed-how', function (req, res) {

    const informedHow = req.session.data['informed-how']

    if (informedHow === 'Over the phone') {
      res.redirect('/v1/register-mr/letter-to-hand')
    } else if (informedHow === 'By letter') {
      res.redirect('/v1/register-mr/letter-to-hand')
    } else {
      res.redirect('/v1/register-mr/letter-to-hand')
    }

  })



router.post('/letter-in-hand', function (req, res) {

  const letterInHand = req.session.data['letter-in-hand']

  if (letterInHand === 'Yes') {
    res.redirect('/v1/register-mr/over-a-month-decision')
  } else if (letterInHand === 'No') {
    res.redirect('/v1/register-mr/resend-letter')
  } else {
    res.redirect('/v1/register-mr/letter-to-hand')
  }

})

router.post('/disagree-reasons-router', function (req, res) {

  const reasons = req.session.data['an-de-disagree-reasons'] || []

  const hasPoints = reasons.includes('Points')
  const hasDates = reasons.includes('Dates')

  if (hasPoints && !hasDates) {
    return res.redirect('/v1/register-mr/disagree-activities')
  }

  if (hasDates && !hasPoints) {
    return res.redirect('/v1/register-mr/disagree-dates')
  }

  if (hasPoints && hasDates) {
    req.session.data.returnToPoints = true
    return res.redirect('/v1/register-mr/disagree-dates')
  }

  return res.redirect('/v1/register-mr/send-supporting-docs')

})

router.post('/disagree-dates', function (req, res) {

  if (req.session.data.returnToPoints) {
    return res.redirect('/v1/register-mr/disagree-activities')
  }

  res.redirect('/v1/register-mr/send-supporting-docs')

})

router.post('/disagree-activities', function (req, res) {

  if (req.session.data.returnToPoints) {
    delete req.session.data.returnToPoints
  }

  res.redirect('/v1/register-mr/send-supporting-docs')

})

router.post('/send-supporting-docs', function (req, res) {

  const supportingDocuments = req.session.data['supporting-documents']

  if (supportingDocuments === 'Yes') {
    res.redirect('/v1/register-mr/supporting-docs-list')
  } else if (supportingDocuments === 'No') {
    res.redirect('/v1/register-mr/no-supporting-docs')
  } else {
    res.redirect('/v1/register-mr/send-supporting-docs')
  }

})

router.post('/supporting-docs-list', function (req, res) {

  res.redirect('/v1/register-mr/anything-else')

})

router.post('/extra-info', function (req, res) {

  res.redirect('/v1/register-mr/check-mr-request')

})

}
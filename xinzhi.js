var body = $response.body.replace(/is_vip":\d/g,'is_vip":1')
.replace(/vip_day":\d+/g,'vip_day":999')
$done({ body });
